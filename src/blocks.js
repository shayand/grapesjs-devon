export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('yt-playlist', {
    category: 'Basic',
    label: 'Youtube Playlist',
    attributes: { class: 'fa fa-list' },
    // content: {
    //   type:'yt-playlist'
    // },
    content: {
      type: 'video',
      src: 'img/video2.webm',
      style: {
        height: '350px',
        width: '615px',
      },
      provider: 'yt'
    }
  });

  bm.add('devon-gallery', {
    category: 'Basic',
    label: 'Image Gallery',
    attributes: { class: 'fa fa-image' },
    content: {
      type:'devon-gallery'
    },
  });

  bm.add('devon-contact', {
    category: 'Forms',
    label: 'Contact Form',
    attributes: { class: 'fa fa-phone-square' },
    content: `<form class="form" data-type="devon-from">
          <div class="form-group">
            <label class="label">Name:</label>
            <input placeholder="Type here your name" class="input"/>
          </div>
          <div class="form-group">
            <label class="label">Email:</label>
            <input type="email" placeholder="Type here your email" class="input"/>
          </div>
          <div class="form-group">
            <label class="label">Phone:</label>
            <input type="text" placeholder="Type here your phone" class="input"/>
          </div>
          <div class="form-group">
            <label class="label">Subject:</label>
            <input type="text" placeholder="Type here your subject" class="input"/>
          </div>
          <div class="form-group">
            <label class="label">Message:</label>
            <textarea class="textarea" cols="2" style="width:100%"></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="button center-block">Send</button>
          </div>
        </form>`
  });

}
