{
  let createFeedback = function () {
    let newFeedbackForm = $('#new-feedback-form');

    newFeedbackForm.submit(function (e) {
      e.preventDefault();

      $.ajax({
        type: 'post',
        url: '/feedbacks/create',
        data: newFeedbackForm.serialize(),
        success: function (data) {
          console.log(data);
          let newFeedback = newFeedbackDom(data.data.feedback);
          $('#feedback-container').prepend(newFeedback);
          deleteFeedback($(' .delete-feedback-btn', newFeedback));
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };

  let newFeedbackDom = function (feedback) {
    return $(`<div
  class="card border-primary m-1"
  style="width: 20rem"
  id="feedback-${feedback._id}"
>
  <div class="d-flex card-header" style="justify-content: space-between">
    <div>${feedback.user.name}</div>
    
    <a href="/feedbacks/destory/${feedback._id}" class="delete-feedback-btn">
      <i class="fas fa-trash-alt"></i>
    </a>
    
  </div>
  <div class="card-body">
    <p class="card-text">${feedback.content}</p>
  </div>
</div>`);
  };
  // method to delete a feedback from DOM
  let deleteFeedback = function (deleteLink) {
    $(deleteLink).click(function (e) {
      e.preventDefault();

      $.ajax({
        type: 'get',
        url: $(deleteLink).prop('href'),
        success: function (data) {
          $(`#feedback-${data.data.feedback_id}`).remove();
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };

  createFeedback();
}
