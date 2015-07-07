QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
$(window).load(function(){
  $(".container img").credimage();
  $(".ci-div").credimage();
  window._$ = jQuery.noConflict(true);
});
