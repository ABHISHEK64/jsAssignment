var library = [{author: 'Bill Gates',title: 'The Road Ahead',readingStatus: true}
,{author: 'Steve Jobs',title: 'Walter Isaacson',readingStatus: true}
,{author: 'Suzanne Collins',title:  'Mockingjay: The Final Book of TheHunger Games',readingStatus: false}];


library.map((index)=>{
    console.log('author',index.author);
    console.log('title',index.title);
    console.log('reading status',index.readingStatus);
    document.write('Authour:',index.author);
    document.write('\n')
     document.write('Title:',index.title);
     document.write('reading Status:',index.readingStatus);
  })

  /** output
   *  Authour:Bill Gates Title:The Road Aheadreading Status:true
   * Authour:Steve Jobs Title:Walter Isaacsonreading Status:true
   * Authour:Suzanne Collins Title:Mockingjay: The Final Book of TheHunger Gamesreading Status:false 
   */