{
  let link = document.querySelector('link[rel="amphtml"]');
  console.log("link", link);
  if (link && link.href) {
    console.log("here");
    window.location = link.href;
  }
}
