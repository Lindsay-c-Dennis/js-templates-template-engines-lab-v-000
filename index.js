function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;
  
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postTemplate = document.getElementById('postTemplate').innerHTML;
  let commentsTemplate = document.getElementById('commentsTemplate').innerHTML;
  
  document.getElementsByTagName('main')[0].innerHTML += pageTemplate;
  
  let postSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  let commentsSection = commentsTemplate();
  let postElement = document.getElementByID('post');
  
  postElement.innerHTML = postSection;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}

function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;
 
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}