<?php

use App\Helpers\Helper;

if (!function_exists('footer_info')) {
    function footer_info()
    {
        return Helper::footerInfo();
    }
}

