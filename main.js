document.addEventListener('DOMContentLoaded',function(event){
  
    // Find all select menus with a custom class
    let selects = document.querySelectorAll('.inline-label');

    // When we've found some selects, loop through
    if(selects){
        selects.forEach(select => {
            // Get all options from the current select
            let options = select.querySelectorAll('option');
            // 
            let firstOption = options[0];
            options.forEach(option => {
                option.setAttribute('data-original',option.innerHTML);
            });     
            select.addEventListener('change',function(event){
                let selectedOption = select.querySelector('option[value="'+select.value+'"]');
                resetOptions(options);
                selectedOption.innerHTML = firstOption.innerHTML +': '+ selectedOption.innerHTML;
            });
        });
    }
  
    let resetOptions = function(options){
        options.forEach(option => {
            option.innerHTML = option.getAttribute('data-original');
        });
    }
  
});
