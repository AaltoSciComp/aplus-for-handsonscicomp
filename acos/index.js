var DraganddropExample;

module.exports = DraganddropExample = {
  meta: {
    'name': 'hoscic-draganddrop',
    'shortDescription': 'Example exercises for the drag-and-drop content type',
    'description': 'Example exercises for the drag-and-drop content type',
    'author': 'Markku Riekkinen',
    'license': 'MIT',
    'version': '0.3.0',
    'url': '',
    'teaserContent': [],
    'contents': {}
  },
  namespace: 'hoscic-draganddrop',
  contentTypeNamespace: 'draganddrop',
  packageType: 'content',
  getDir: function() {
    return __dirname;
  },
  register: function(handlers) {
    handlers.contentPackages['hoscic-draganddrop'] = DraganddropExample;
    handlers.contentTypes.draganddrop.installedContentPackages.push(DraganddropExample);
    
    // Delegate the autodiscovery of exercises to the content type
    return handlers.contentTypes.draganddrop.registerContentPackage(DraganddropExample, __dirname);
  }
};
