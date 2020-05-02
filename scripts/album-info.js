{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('artist').text(artist);
  $('<div>#release-info').val(release.info);
}
