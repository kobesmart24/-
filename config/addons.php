<?php

return array (
  'autoload' => true,
  'hooks' => 
  array (
  ),
  'route' => 
  array (
    0 => 
    array (
      'addons' => 'cms',
      'domain' => 'cms',
      'rule' => 
      array (
        '/' => 'cms/frontend/index/index',
        'download/[:id]' => 'cms/frontend/index/download',
        'diyform/[:diyid]' => 'cms/frontend/index/diyform',
        'lists/[:cateid]/[:flag]/[:page]' => 'cms/frontend/index/lists',
        'show/[:cateid]/[:id]' => 'cms/frontend/index/show',
        'search/[:keys]/[:flag]/[:page]' => 'cms/frontend/index/search',
        'error/[:message]' => 'cms/frontend/error/err',
        'notice/[:message]' => 'cms/frontend/error/notice',
        'login' => 'cms/frontend/member/login',
        'register' => 'cms/frontend/member/register',
        'reset' => 'cms/frontend/member/reset',
      ),
    ),
  ),
  'service' => 
  array (
  ),
);