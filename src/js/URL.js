const URL={
  chapter:function(bookId,chapterIndex){
    return `/book/${bookId}/chapter/${chapterIndex}`;
  },
  reactSessionFile:'/project/react/sessionfile',
  reactZipFile:'/project/react/zipfile',
};

export default URL;
