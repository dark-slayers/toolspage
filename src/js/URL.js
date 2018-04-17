const URL={
  chapter:function(bookId,chapterIndex){
    return `/book/${bookId}/chapter/${chapterIndex}`;
  },
  reactZip:'/book/info',
};

export default URL;
