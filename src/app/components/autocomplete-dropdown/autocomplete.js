$( function() {
  // jQuery.ui.autocomplete.prototype._resizeMenu = function () {
  //   var ul = this.menu.element;
  //   ul.outerWidth(this.element.outerWidth());
  // }
  // this is a sample city list. the same structure shall be used for UI compatibilty
  var cityList = [
    {
      city: "Agra",
      label: "Agra,Uttar Pradesh, India",
      state: "Uttar Pradesh, India"
    },
    {
      city:"Ahmedabad",
      label: "Ahmedabad, Gujrat, India",
      state:"Gujrat, India"
    },
    {
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    },{
      city: "Chandigarh",
      label:"Chandigarh, Punjab, India",
      state: "Punjab, India"
    }
  ];

  // function that structures each autocomplete item
  if($( "#tags" ).length){
    $( "#tags" ).autocomplete({
        minLength: 0,
        source: cityList,
        focus: function( event, ui ) {
          return false;
        },
      })
      .focus(function () {
          $(this).autocomplete("search");
      })
      .autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
          .append( "<div><b>" + item.city + "</b><br>" + item.state + "</div>" )
          .appendTo( ul );
      };
  }
} );

$(document).ready(function(){
  // fucntion to display cross and make input uneditable
  $('.cm-autocomplete-input').on('autocompleteselect',function(){
    this.blur()
    this.disabled = true;
    $('.cm-autocomplete').addClass('active');
  })
  // // Removes cross and reactivates inputs
  $('.cm-autocomplete-cross').on('click',function(){
    $('.cm-autocomplete-input').focus();
    $('.cm-autocomplete-input').val('');
    $('.cm-autocomplete-input').prop('disabled',false);
    $(".autocomplete-dropdown-link").addClass('active');
    $('.cm-autocomplete').removeClass('active');
    $(this).parent().find('input').autocomplete("search");

  })

  $(".autocomplete-dropdown-link").on('click',function(){

    if($(this).hasClass('active')){
      $(this).parent().find('input').autocomplete("close");
      $(this).removeClass('active')
    }else{
      $(this).parent().find('input').autocomplete("search");
      $(this).addClass('active')
    }
  })
})
