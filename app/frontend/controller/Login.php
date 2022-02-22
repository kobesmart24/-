<?php
/**
 * funadmin
 * ============================================================================
 * 版权所有 2018-2027 funadmin，并保留所有权利。
 * 网站地址: http://www.Funadmin.com
 * ----------------------------------------------------------------------------
 * 采用最新Thinkphp6实现
 * ============================================================================
 * Author: yuege
 * Date: 2019/11/27
 */

namespace app\frontend\controller;

use app\common\controller\Frontend;
use think\App;
use think\facade\View;
use app\frontend\validate\MemberValidate;
use think\exception\ValidateException;

class Login extends Frontend
{
    protected $callback;
    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->modelClass = new \app\common\model\Member();
        $this->initialize();
    }
    public function initialize()
    {
        parent::initialize(); // TODO: Change the autogenerated stub
        if (isLogin()) {
            $this->redirect(__u('/'));
        }
        $view = [
            'member'=>isLogin(),
        ];
        $this->callback = $this->request->param('callback');
        View::assign($view);
    }
    /************************************注册登陆*******************************/

    /**
     * @return \think\Response
     * 登录
     */
    public function index()
    {
        if (isLogin()) {
            return redirect()->restore();
        }
        if ($this->request->isPost()) {
            try {
                $this->modelClass->login();
            }catch(\Exception $e){
                $this->error(lang($e->getMessage()));
            }
            $url = $this->callback?$this->callback:__u('index/index');
            $this->success(lang('Login Successful'),$url);
        }
        $view = [];
        return view('', $view);
    }

    /**
     * @return \think\Response
     * 注册
     */
    public function reg()
    {
        if ($this->request->isPost()) {
            try {
                $this->modelClass->reg();
            }catch(\Exception $e){
                $this->error(lang($e->getMessage()));
            }
//            $this->success(lang('The activation email has been sent successfully, please enter the email verification code, the activation email'), url('login/reg'));
            $this->success(lang('reg successful'), __u('login/index'));
        }
        if ($this->request->param('type') == 1) {
            cookie('code', null);
            cookie('email', null);
            cookie('username', null);
        }
        return view();

    }

    //注册激活
    public function regActive()
    {
        if ($this->request->isPost()) {
            $data = $this->request->post();
            //校验场景中重置密码的方法
            try {
                validate(MemberValidate::class)
                    ->scene('RegActive')
                    ->check($data);
            } catch (ValidateException $e) {
                $this->error($e->getError());
            }
            if (!cookie('code')) {
                $this->error('验证码错误！', __u('login/reg'));

            }
            if ($data['vercode'] != cookie('code')) {
                $this->error('验证码错误！');
            }
            $data = session('regData');
            $data['email_validated'] = 1;
            $member = $this->modelClass->save($data);
            if ($member) {
                cookie('code', null);
                cookie('email', null);
                cookie('username', null);
                $this->success('激活成功', __u('login/index'));
            } else {
                $this->error('激活失败');
            }
        }

    }

    /*
     * 忘记密码
     */


    public function forget()
    {
        if ($this->request->isPost()) {
            $data = $this->request->post();
            if (!captcha_check($data['vercode'])) $this->error('验证码错误');
            $member = $this->modelClass->where('email', $data['email'])->find();
            if (!$member) $this->error('邮箱不存在');
            $code = mt_rand('100000', '999999');
            $time = 10 * 60;
            $content = '亲爱的FunAdmin用户:' . $member->name . '<br>您正在重置密码，您的验证码为:' . $code . '，请在' . $time / 60 . '分钟内进行验证';
            $param = ['to'=>$member->email,'subject'=>'FunAdmin重置密码邮件','content'=>$content];
            $mail = hook('sendEmail',$param);
            $mail = json_decode($mail,true);
            if($mail['code']>0){
                cookie('forget_code', $code, $time);
                cookie('forget_uid', $member->id, $time);
                cookie('forget_email', $member->email, $time);
                $this->success('发送成功', __u('login/forget'));
            } else {
                $this->error('发送失败');
            }
        }
        if ($this->request->param('type') == 1) {
            cookie('forget_code', null);
            cookie('forget_uid', null);
            cookie('forget_email', null);
        }
        return view();
    }

    //重置密码
    public function repass()
    {
        if ($this->request->isPost()) {

            $data = $this->request->post();
            //校验场景中重置密码的方法
            try {
                validate(MemberValidate::class)
                    ->scene('Repass')
                    ->check($data);
            } catch (ValidateException $e) {
                $this->error($e->getError());
            }
            if (!cookie('forget_code')) {
                $this->error('验证码错误！', __u('login/forget'));
            }
            if ($data['vercode'] != cookie('forget_code')) {
                $this->error('验证码错误！');
            }
            $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
            $member = $this->modelClass->find($data['id']);
            $member->password = $data['password'];
            $res = $member->save();
            cookie('forget_code', null);
            cookie('forget_uid', null);
            cookie('forget_email', null);
            if ($res) {
                $this->success('修改成功', __u('login/index'));
            } else {
                $this->error('修改失败');
            }
        }
    }


}
