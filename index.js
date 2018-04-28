function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;
  
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postTemplate = document.getElementById('postTemplate').innerHTML;
  
  let postTemplateFn = _.template(postTemplate);
  
  let postsDiv = document.getElementById('post');
  
  let postTemplateHTML = postTemplateFn({ 'title': title, 'body' : body, 'author': author });
  
  postDivs.innerHTML += postTemplateHTML;
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