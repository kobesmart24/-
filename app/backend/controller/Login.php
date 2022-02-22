<?php
/**
 * FunAdmin
 * ============================================================================
 * 版权所有 2017-2028 FunAdmin，并保留所有权利。
 * 网站地址: http://www.FunAdmin.com
 * ----------------------------------------------------------------------------
 * 采用最新Thinkphp6实现
 * ============================================================================
 * Author: yuege
 * Date: 2017/8/2
 */
namespace app\backend\controller;
use app\backend\service\AuthService;
use app\common\controller\Backend;
use Exception;
use fun\helper\SignHelper;
use think\App;

class Login extends Backend {
    public function __construct(App $app) {
        parent::__construct($app);
    }
    protected $layout='';
    public function index(){
        if (!$this->request->isPost()) {
            $admin= session('admin');
            $admin_sign= session('admin.token') == SignHelper::authSign($admin) ? $admin['id'] : 0;
            // 签名验证是否存在
            if ($admin && $admin_sign) {
                $this->redirect(__u('index/index'));
            }
            $bg = hook('bgHook')?hook('bgHook'):'/static/backend/images/admin-bg.jpg';
            $view = ['bg'=>$bg];
            return view('',$view);
        } else {
            $post  = $this->request->post() ;
            $username = $this->request->post('username', '', ['strip_tags','trim','htmlspecialchars']);
            $password = $this->request->post('password', '',['strip_tags','trim','htmlspecialchars']);
            $rememberMe = $this->request->post('rememberMe');
            $rule = [
                "username|用户名" => 'require',
                "password|密码" => 'require',
            ];
            if(config('captcha.check')){
                $rule["captcha|验证码"] = 'require|captcha';
            }
            $this->validate($post, $rule);
            // 用户信息验证
            try {
                $auth = new AuthService();
                $auth->checkLogin($username, $password, $rememberMe);
            } catch (Exception $e) {
                $this->error(lang('Login Failed')."：{$e->getMessage()}");
            }
            $this->success(lang('Login Success').'...',__u('index/index'));
        }
    }
    public function verify()
    {
        return parent::verify(); // TODO: Change the autogenerated stub
    }

}