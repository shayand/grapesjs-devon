export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('yt-playlist', {
    model: {
      defaults: {
        // Default props
      },
    },
    view: {

    },
  });

  domc.addType('devon-gallery', {
    model: {
      defaults: {
        // Default props
      },
    },
    view: {

    },
  });

};
