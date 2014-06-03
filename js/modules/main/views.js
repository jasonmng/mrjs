'use strict';

define([
   'modules/main/views/headerView',
   'modules/main/views/listView',
   'modules/main/views/footerView',
], function( header, content, footer ){

   return { header: header, content: content, footer: footer };

});
