function ReiCalendarImageViewerDialog() { } // namespace

ReiCalendarImageViewerDialog.displayCalendar = function() {
    if (!$('#calendarContainer').length) {
        $('head').append(" \
        <style> \
            a.monthNav { color:#444; text-decoration:none; font-size: 1.3em; font-weight: bold; } \
            .calendarImage { max-width:100%; } \
            #calendarContainer { max-width:500px } \
            #previousMonth { float:left; } \
            #nextMonth { float:right; text-align:right; } \
            .modal-dialog { max-width:530px; } \
            .modal { margin-left: auto; margin-right: auto; } \
            .modal-body { padding:15px 15px 0px 15px; } \
            html { overflow-y: visible; } \
        </style>");
        $('body').append(" \
        <div class='modal fade' id='calendarModal'> \
          <div class='modal-dialog'> \
            <div class='modal-content'> \
              <div class='modal-header'> \
                <h2 class='modal-title'>Galeria</h2> \
                <button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button> \
              </div> \
              <div class='modal-body'> \
              <div class='js-img-compare'>\
              <div style='display: none;'>\
                  <span class='images-compare-label'>Antes</span>\
                  <img class='img-icon w-100' src='file:///C:/Users/Admon/Downloads/PIG_01082022%20(1)/PIG_01082022/assets/images/tangamanga-old.png-1-800x533.jpg' alt='Before'>\
              </div>\
              <div>\
                  <span class='images-compare-label'>Despues</span>\
                      <img class='img-icon w-100' src='file:///C:/Users/Admon/Downloads/PIG_01082022%20(1)/PIG_01082022/assets/images/tangamanga-new.png-1-800x533.jpg' alt='After'>\
              </div>\
          </div>\
              \
            </div><!-- /.modal-content --> \
          </div><!-- /.modal-dialog --> \
        </div><!-- /.modal -->");
        for (var i = 1; i < arguments.length; i++)
        {
            $('.calendarImages').append("<div><img class='calendarImage'></div>");
            $('.calendarImage:last').attr('src', arguments[i]);
        }
                
            
        $('.calendarImages').slick({
            prevArrow: $('#previousMonth'),
            nextArrow: $('#nextMonth'),
        });
        $('.slick-slider').css('margin-bottom', '0px');

        // The first parameter passed to the displayCalendar function must be a string formatted in the format 
        // "ButtonName1|ButtonHref1,ButtonName2|ButtonHref2,..."
        // These buttons will be prepended to the footer of the modal.
        var additionalButtons = arguments[0].split(",");
        for (var index in additionalButtons) {
            var button = additionalButtons[index].split("|");
            if (button[0] == "Enroll Now") {
            $('#calendarModal .modal-footer').prepend("<a class='button accent' href='" + button[1] + "'>" + button[0] + "</a>");
            }
          else {
              $('#calendarModal .modal-footer').prepend("<a class='button' href='" + button[1] + "'>" + button[0] + "</a>");
        }
        }
    }
    $('#calendarModal').modal();
    $('#calendarModal').on('shown.bs.modal', function (e) {
        $('.calendarImages').resize();
    });
    $('.modal').scroll(function () {
        $('.modal-backdrop').css('height', $('.modal')[0].scrollHeight);
    });
}