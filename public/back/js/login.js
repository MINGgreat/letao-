/**
 * Created by Administrator on 2017/10/29 0029.
 */

$(function(){
  //表单校验功能
// 用户名不能为空
//用户密码不能为空
//用户密码必须为6-12位

  // 初始化

  var $form = $("#form");
  $form.bootstrapPaginator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields:{
      //配置所有的字段的规则,对应表单中的name属性
      username:{
        validators:{
          notEmpty:{
            message:"用户名不能为空"
          },
          callback:{
            message:"用户名错误"
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"用户密码不能为空"
          },
          stringLength:{
            min:6,
            max:12,
            message:"用户密码必须是6-12位"
          },
          callback:{
            message:"用户密码错误"
          }
        }
      }
    }
  })
})
