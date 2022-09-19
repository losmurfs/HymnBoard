const hymns = {
  settings: {
    lang: "en_US",
    transitions: {
      fadeIn: 1500,
      fadeOut: 1500
    },
    titles: {
      en_US: {"1":"The Morning Breaks ","2":"The Spirit of God","3":"Now Let Us Rejoice ","4":"Truth Eternal","5":"High on the Mountain Top ","6":"Redeemer of Israel ","7":"Israel, Israel, God Is Calling ","8":"Awake and Arise","9":"Come, Rejoice","":"Nearer,Dear Savior, to Thee 99 ","12":"&rsquo;Twas Witnessed in the Morning Sky*","15":"I Saw a Mighty Angel Fly*","54":"Behold, the Mountain of the Lord*","62":"All Creatures of Our God and King* ","82":"For All the Saints*","86":"How Great Thou Art*","100":"Nearer, My God, to Thee","101":"Guide Me to Thee ","102":"Jesus, Lover of My Soul","103":"Precious Savior, Dear Redeemer ","104":"Jesus, Savior, Pilot Me","105":"Master, the Tempest Is Raging","106":"God Speed the Right","107":"Lord, Accept Our True Devotion ","108":"The Lord Is My Shepherd","109":"The Lord My Pasture Will Prepare ","110":"Cast Thy Burden upon the Lord","111":"Rock of Ages ","112":"Savior, Redeemer of My Soul","113":"Our Savior&rsquo;s Love","114":"Come unto Him","115":"Come, Ye Disconsolate","116":"Come, Follow Me","117":"Come unto Jesus","118":"Ye Simple Souls Who Stray","119":"Come, We That Love the Lord","120":"Lean on My Ample Arm ","121":"I&rsquo;m a Pilgrim, I&rsquo;m a Stranger","122":"Though Deepening Trials","123":"Oh, May My Soul Commune with Thee","124":"Be Still, My Soul* ","125":"How Gentle God&rsquo;s Commands","126":"How Long, O Lord Most Holy and True","127":"Does the Journey Seem Long?","128":"When Faith Endures ","129":"Where Can I Turn for Peace?","130":"Be Thou Humble ","131":"More Holiness Give Me","132":"God Is in His Holy Temple","133":"Father in Heaven ","134":"I Believe in Christ","135":"My Redeemer Lives","136":"I Know That My Redeemer Lives","137":"Testimony","138":"Bless Our Fast, We Pray","139":"In Fasting We Approach Thee","140":"Did You Think to Pray? ","141":"Jesus, the Very Thought of Thee","142":"Sweet Hour of Prayer ","143":"Let the Holy Spirit Guide* ","144":"Secret Prayer","145":"Prayer Is the Soul&rsquo;s Sincere Desire","146":"Gently Raise the Sacred Strain ","147":"Sweet Is the Work","148":"Sabbath Day","149":"As the Dew from Heaven Distilling","150":"O Thou Kind and Gracious Father","151":"We Meet, Dear Lord ","152":"God Be with You Till We Meet Again ","153":"Lord, We Ask Thee Ere We Part","154":"Father, This Hour Has Been One of Joy","155":"We Have Partaken of Thy Love ","156":"Sing We Now at Parting ","157":"Thy Spirit, Lord, Has Stirred Our Souls","158":"Before Thee, Lord, I Bow My Head ","159":"Now the Day Is Over","160":"Softly Now the Light of Day","161":"The Lord Be with Us","162":"Lord, We Come before Thee Now","163":"Lord, Dismiss Us with Thy Blessing ","164":"Great God, to Thee My Evening Song ","165":"Abide with Me; &rsquo;Tis Eventide ","166":"Abide with Me! ","167":"Come, Let Us Sing an Evening Hymn","168":"As the Shadows Fall","169":"As Now We Take the Sacrament ","170":"God, Our Father, Hear Us Pray","171":"With Humble Heart","172":"In Humility, Our Savior","173":"While of These Emblems We Partake","174":"While of These Emblems We Partake","175":"O God, the Eternal Father","176":"&rsquo;Tis Sweet to Sing the Matchless Love","177":"&rsquo;Tis Sweet to Sing the Matchless Love","178":"O Lord of Hosts","179":"Again, Our Dear Redeeming Lord ","180":"Father in Heaven, We Do Believe","181":"Jesus of Nazareth, Savior and King ","182":"We&rsquo;ll Sing All Hail to Jesus&rsquo; Name ","183":"In Remembrance of Thy Suffering","184":"Upon the Cross of Calvary","185":"Reverently and Meekly Now","186":"Again We Meet around the Board ","187":"God Loved Us, So He Sent His Son ","188":"Thy Will, O Lord, Be Done","189":"O Thou, Before the World Began ","190":"In Memory of the Crucified ","191":"Behold the Great Redeemer Die","192":"He Died! The Great Redeemer Died ","193":"I Stand All Amazed ","194":"There Is a Green Hill Far Away ","195":"How Great the Wisdom and the Love","196":"Jesus, Once of Humble Birth","197":"O Savior, Thou Who Wearest a Crown ","198":"That Easter Morn ","199":"He Is Risen! ","200":"Christ the Lord Is Risen Today ","201":"Joy to the World ","202":"Oh, Come, All Ye Faithful","203":"Angels We Have Heard on High ","204":"Silent Night ","205":"Once in Royal David&rsquo;s City ","206":"Away in a Manger ","207":"It Came upon the Midnight Clear","208":"O Little Town of Bethlehem ","209":"Hark! The Herald Angels Sing ","210":"With Wondering Awe ","211":"While Shepherds Watched Their Flocks ","212":"Far, Far Away on Judea&rsquo;s Plains","213":"The First Noel ","214":"I Heard the Bells on Christmas Day ","215":"Ring Out, Wild Bells ","216":"We Are Sowing","217":"Come, Let Us Anew","218":"We Give Thee But Thine Own ","219":"Because I Have Been Given Much*","220":"Lord, I Would Follow Thee","221":"Dear to the Heart of the Shepherd","222":"Hear Thou Our Hymn, O Lord ","223":"Have I Done Any Good?","224":"I Have Work Enough to Do ","225":"We Are Marching On to Glory","226":"Improve the Shining Moments","227":"There Is Sunshine in My Soul Today ","228":"You Can Make the Pathway Bright","229":"Today, While the Sun Shines","230":"Scatter Sunshine ","231":"Father, Cheer Our Souls Tonight","232":"Let Us Oft Speak Kind Words","233":"Nay, Speak No Ill","234":"Jesus, Mighty King in Zion ","235":"Should You Feel Inclined to Censure","236":"Lord, Accept into Thy Kingdom","237":"Do What Is Right ","238":"Behold Thy Sons and Daughters, Lord","239":"Choose the Right ","240":"Know This, That Every Soul Is Free ","241":"Count Your Blessings ","242":"Praise God, from Whom All Blessings Flow ","243":"Let Us All Press On","244":"Come Along, Come Along ","245":"This House We Dedicate to Thee ","246":"Onward, Christian Soldiers ","247":"We Love Thy House, O God ","248":"Up, Awake, Ye Defenders of Zion","249":"Called to Serve","250":"We Are All Enlisted","251":"Behold! A Royal Army ","252":"Put Your Shoulder to the Wheel ","253":"Like Ten Thousand Legions Marching ","254":"True to the Faith","255":"Carry On ","256":"As Zion&rsquo;s Youth in Latter Days ","257":"Rejoice! A Glorious Sound Is Heard ","258":"O Thou Rock of Our Salvation ","259":"Hope of Israel ","260":"Who&rsquo;s on the Lord&rsquo;s Side?","261":"Thy Servants Are Prepared","262":"Go, Ye Messengers of Glory ","263":"Go Forth with Faith","264":"Hark, All Ye Nations!","265":"Arise, O God, and Shine","266":"The Time Is Far Spent","267":"How Wondrous and Great ","268":"Come, All Whose Souls Are Lighted","269":"Jehovah, Lord of Heaven and Earth","270":"I&rsquo;ll Go Where You Want Me to Go","271":"Oh, Holy Words of Truth and Love ","272":"Oh Say, What Is Truth? ","273":"Truth Reflects upon Our Senses ","274":"The Iron Rod ","275":"Men Are That They Might Have Joy ","276":"Come Away to the Sunday School ","277":"As I Search the Holy Scriptures","278":"Thanks for the Sabbath School","279":"Thy Holy Word","280":"Welcome, Welcome, Sabbath Morning","281":"Help Me Teach with Inspiration ","282":"We Meet Again in Sabbath School","283":"The Glorious Gospel Light Has Shone","284":"If You Could Hie to Kolob* ","285":"God Moves in a Mysterious Way","286":"Oh, What Songs of the Heart","287":"Rise, Ye Saints, and Temples Enter ","288":"How Beautiful Thy Temples, Lord","289":"Holy Temples on Mount Zion ","290":"Rejoice, Ye Saints of Latter Days","291":"Turn Your Hearts ","292":"O My Father","293":"Each Life That Touches Ours for Good ","294":"Love at Home ","295":"O Love That Glorifies the Son","296":"Our Father, by Whose Name","297":"From Homes of Saints Glad Songs Arise","298":"Home Can Be a Heaven on Earth","299":"Children of Our Heavenly Father* ","300":"Families Can Be Together Forever ","301":"I Am a Child of God","302":"I Know My Father Lives ","303":"Keep the Commandments","304":"Teach Me to Walk in the Light","305":"The Light Divine ","306":"God&rsquo;s Daily Care ","307":"In Our Lovely Deseret","308":"Love One Another ","309":"As Sisters in Zion (Women) ","310":"A Key Was Turned in Latter Days (Women)","311":"We Meet Again as Sisters (Women) ","312":"We Ever Pray for Thee (Women)","313":"God Is Love (Women)","314":"How Gentle God&rsquo;s Commands (Women)","315":"Jesus, the Very Thought of Thee (Women)","316":"The Lord Is My Shepherd (Women)","317":"Sweet Is the Work (Women)","318":"Love at Home (Women) ","319":"Ye Elders of Israel (Men)","320":"The Priesthood of Our Lord (Men) ","321":"Ye Who Are Called to Labor (Men) ","322":"Come, All Ye Sons of God (Men) ","323":"Rise Up, O Men of God (Men&rsquo;s Choir)","324":"Rise Up, O Men of God (Men)","325":"See the Mighty Priesthood Gathered (Men&rsquo;s Choir) ","326":"Come, Come, Ye Saints (Men&rsquo;s Choir)","327":"Go, Ye Messengers of Heaven (Men&rsquo;s Choir)","328":"An Angel from on High (Men&rsquo;s Choir)","329":"Thy Servants Are Prepared (Men&rsquo;s Choir)","330":"See, the Mighty Angel Flying (Men&rsquo;s Choir) ","331":"Oh Say, What Is Truth? (Men&rsquo;s Choir) ","332":"Come, O Thou King of Kings (Men&rsquo;s Choir) ","333":"High on the Mountain Top (Men&rsquo;s Choir) ","334":"I Need Thee Every Hour (Men&rsquo;s Choir) ","335":"Brightly Beams Our Father&rsquo;s Mercy (Men&rsquo;s Choir)","336":"School Thy Feelings (Men&rsquo;s Choir)","337":"O Home Beloved (Men&rsquo;s Choir) ","338":"America the Beautiful","339":"My Country, &rsquo;Tis of Thee ","340":"The Star-Spangled Banner ","341":"God Save the King"}
    }
  }
};
function hymnNumber(event)
{
  const $input = $(this);
  const hymn = $input.val();
  const row = $input.attr('id');
  const cls = '.' + row.replace('1','.one').replace('2','.two').replace('3','.three').replace('4','.four').replace('5','.five');
  const $button = $(cls);
  $button.html('');
  for(let c in hymn)
  {
    $button.append(`<div>${hymn[c]}</div>`);
  }
  if($button.text().trim() == '')
  {
    $button.addClass("hidden");
  }
  else
  {
    $button.removeClass("hidden");
  }
}

/**
 * Given a string array in the format of title hymn DOWNLOAD stored in hymns.settings.titles.en_US, prints out to page a map in format en_US: {number:title,number:title,number:title,...}
 */
function hymnLinesToHymnMap()
{
  const hymnsEnUS = new Map();
  hymns.settings.titles.en_US.forEach((hymn) => {
    console.log(hymn);
    hymn = hymn.replace(" DOWNLOAD","");
    const parts = hymn.split(" ");
    const key = parts.at(-1);
    hymn = hymn.replace(" " + key,"");
    console.log(`key: ${key}, hymn: ${hymn}`);
    hymnsEnUS.set(key,hymn);
  });
  $('.output').html(`en_US: {`);
  hymnsEnUS.forEach((value, key) => { $('.output').append(`"${key}":"${value}",`); } );
  $('.output').append(`}`);
}

$(
  function(){
    $('a').hide();
    $('[id^=hymn]').on('keyup',hymnNumber);
    $('.hymn.bug button').on('click',function(){
      const $button = $(this);
      if($button.hasClass('.edit') || $button.text() == 'Edit' || $button.text().trim('') == '')
      {
        $('.hymn.board.editor').removeClass('hidden').show();
      }
      else
      {
        const hymn = $(this).text();
        const lang = hymns.settings.lang;
        const titles = hymns.settings.titles[lang];
        const title = titles[hymn];
        const $title = $('.hymn.title button');
        $title.html(`#${hymn} - ${title}`);
        $('.hymn.bug').fadeOut(1500,function(){$(this).addClass('hidden')});
        $title.parent().fadeIn(1500,function(){$(this).removeClass('hidden')});
      }
    });
    $('.hymn.board.editor button').on('click',function(){$('.hymn.board.editor').hide();});
    $('.hymn.title button').on('click',function(){$('.hymn.bug').fadeIn(1500);$('.hymn.title').fadeOut(1500);});
    //hymnLinesToHymnMap();
  }
);