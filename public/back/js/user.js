/**
 * Created by Administrator on 2017/10/30 0030.
 */

$(function () {

  var currentpage = 1;
  var pageSize = 8 ;

  function reader(){

    $.ajax({
      type:"get",
      url:"/user/queryUser",
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      success:function (data) {
        var html = template("tpl",data);
        $(tbody).html(html);

        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion:3,
          currentPage:currentpage,
          size:"small",
          totalpages:Math.ceil(data.total/pageSize),
          onPageClicked:function(event, originalEvent, type,page){
            currentPage = page;
            render();
          }
        });

      }
    })
  }
  render();
})
