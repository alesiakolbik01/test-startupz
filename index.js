const toggleHideChatBot = (e) => {

    const curElemId = e.target.getAttribute('id');
    const isHidden =  $('.chat-bot').hasClass('hidden');

    if(!isHidden && curElemId === 'chat-bot-btn' || isHidden && curElemId === 'chat-bot'){
        $('.chat-bot').toggleClass('hidden');
        e.stopPropagation;
    }
}

const scrollToPoint = (positionTop) => {
    $('body, html').animate({ scrollTop: positionTop }, 500);
}

const handleClickMenuItem = (e) => {

    e.stopPropagation;
    e.preventDefault;

    const curElemId = $( e.target ).attr('data-link');
    const elemPosition = $('#'+curElemId).first().offset().top;

    if(curElemId){
        scrollToPoint(elemPosition);
    }
}

const validateForm = (data) => {
    
    for(let i = 0, length = data.length; i < length; i += 1){
        if(data[i].req && !data[i].value){
            return false;
        }
    }

    return true;
}

const getFormData = (form) => {
    return form.find('input, textarea').map(
        function(){
            return { 
                    value: $( this ).val(),
                    req: $( this ).attr('required')
                };
        }
    );
}

const handleSendForm = () => {
    const form = $('#user-form');
    const formData = getFormData(form)
    const isValid = validateForm(formData);
    if(isValid){
        form.removeClass('no-valid');
        //sending the request to the server
        toggleCloseModal();
    }
    else
    {
        form.addClass('no-valid');
    }
    
}

const toggleCloseModal = () => {

    $( "#modal" ).first().fadeToggle( "slow");
}

$( document ).ready(function() {
    console.log( "ready!" );
    $('#chat-bot').on('click', toggleHideChatBot);
    $('#chat-bot-btn').on('click', toggleHideChatBot);
    $('#main-menu').on('click', handleClickMenuItem);
    $('#btn-to-works').on('click', handleClickMenuItem);
    $('#main-logo').on('click', handleClickMenuItem);
    $('#btn-send-form').on('click', handleSendForm);
    $('#mb-btm-close').on('click', toggleCloseModal)
});

