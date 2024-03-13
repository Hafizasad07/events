
$(".checkputFilter").change(function(){
  var val = $(this).val();
  var dataId = $(this).attr('data-id');
  if($(this).is(':checked')){
    $(".selectedCheckboxes").append("<div class='text1 mb-2 mr-1' data-checkbox='"+dataId+"'>"+val+" <img src='assets/icons/cross.svg' alt='' class='selected-cross'></div>");
  }else{
    $(".selectedCheckboxes .text1").each(function(){
      if (dataId == $(this).attr("data-checkbox") ) {
        $(this).remove();
      }
    })
  }
  applyFilter();
});
$(".selectedCheckboxes").on('click','.selected-cross',function(){
  var parent = $(this).parent();
  var data = $(parent).attr('data-checkbox');
  $(".all-checkboxes .checkputFilter").each(function(){
    if (data = $(this).attr('data-id')) {
        $(this).prop( "checked", false );
    }
  })
  $(parent).remove();
  applyFilter();
});
$(".clearCheckboxes").click(function(){
    $(".selectedCheckboxes .text1").each(function(){
        $(this).remove();
    });
    $(".all-checkboxes .checkputFilter").each(function(){
        if($(this).is(':checked')){
          $(this).prop( "checked", false );
        }
    })
    applyFilter();
});

// alphabet-filter
$(".alphabet-section-text3 a").click(function(){
  $(".alphabet-section-text3 a").removeClass("active");
  $(this).addClass("active");
  applyFilter();
})



// Apply Filter
$(".selectedCheckboxes").html("");
$(".checkputFilter").prop("checked",false);
function applyFilter(){
  var show = 0;
  $("#pagingBox .data-filter").addClass("d-none");
  // selected filter apply
  if ($("#selectedCheckboxes").children().length == 0) {
    var selectedalphabet = $(".alphabet-section-text3 a.active").text().toLowerCase();
    $("#pagingBox .data-filter").each(function () {
      var alphabetData = $(this).attr('data-alphabet').toLowerCase();
      if (selectedalphabet == "all" || selectedalphabet[0] == alphabetData[0]) {
        $(this).removeClass("d-none");
        show++;
      }
    })
  }else{
    $("#selectedCheckboxes .text1").each(function(){
      var selectedcheckbox = $(this).text().toLowerCase().replace(/\s+/g,' ').trim();
      var selectedalphabet = $(".alphabet-section-text3 a.active").text().toLowerCase();
      $("#pagingBox .data-filter").each(function () {
        var alphabetData = $(this).attr('data-alphabet').toLowerCase();
        var genreData = $(this).attr('data-genre').toLowerCase();
        var languageData = $(this).attr('data-language').toLowerCase();
        var authorData = $(this).attr('data-author').toLowerCase();
        if ((selectedalphabet == "all" || selectedalphabet[0] == alphabetData[0]) && (selectedcheckbox == genreData || selectedcheckbox == languageData || selectedcheckbox == authorData)) {
          $(this).removeClass("d-none");
          show++;
        }
      })
    })
  }
  // hide or show empty and cards sections
  if (show == 0) {
    $(".emptyauthor-section").removeClass("d-none");
    $(".mob-card-pt").addClass("d-none");
    $("#page_navigation").addClass("d-none");
  }else{
    $(".emptyauthor-section").addClass("d-none");
    $(".mob-card-pt").removeClass("d-none");
    $("#page_navigation").removeClass("d-none");
  }
}

