{
  let createProject = function () {
    let newProjectForm = $('#new-project-form');

    newProjectForm.submit(function (e) {
      e.preventDefault();

      $.ajax({
        type: 'post',
        url: '/projects/create',
        data: newProjectForm.serialize(),
        success: function (data) {
          console.log(data);
          let newProject = newProjectDom(data.data.project);
          $('#project-container').prepend(newProject);
          // deleteFeedback($(' .delete-feedback-btn', newFeedback));
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };

  // method to create a post in Dom
  let newProjectDom = function (project) {
    return $(`<div id="project-${project.id}">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">description</th>
                  </tr>
                </thead>
                <tbody>
                  <% for(project of projects){%>
                  <tr class="table-active">
                    <th scope="row">${project.user.name}</th>
                    <td>${project.subject}</td>
                    <td>${project.description}</td>
                  </tr>
                  <%}%>
                </tbody>
              </table>
  </div>`);
  };

  createProject();
}
