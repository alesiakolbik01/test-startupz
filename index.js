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

$( document ).ready(function() {
    console.log( "ready!" );
    $('#chat-bot').on('click', toggleHideChatBot);
    $('#chat-bot-btn').on('click', toggleHideChatBot);
    $('#main-menu').on('click', handleClickMenuItem);
    $('#btn-to-works').on('click', handleClickMenuItem);
    $('#main-logo').on('click', handleClickMenuItem);
});

