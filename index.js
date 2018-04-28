function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;
  
  let postTemplate = document.getElementById('postTemplate').innerHTML;
  
  let postTemplateFn = _.template(postTemplate);
  
  let postsDiv = document.getElementById('post');
  
  let postTemplateHTML = postTemplateFn({ 'title': title, 'body' : body, 'author': author });
  
  postDivs.innerHTML
}