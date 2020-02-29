{
  let link = document.querySelector('link[rel="amphtml"]');
  if (link && link.href) {
    window.location = link.href;
  } else {
    alert('No AMP link found on page.')
  }
}
