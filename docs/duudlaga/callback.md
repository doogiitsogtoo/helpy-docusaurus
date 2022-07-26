# Эргэн холбогдох

## Эргэн холбогдох, алдсан дуудлага, voice дуудлага

- `Иргэнтэй ярьж дууссаны дараа дуудлага дуусгах үед эргэн холбогдох даалгавар үүсгэх`

- `Дуудлага хийгээгүй үед эргэн холбогдох даалгавар үүсгэх`

### Эргэн холбогдох даалгавар үүсгэх арга 1

Иргэнтэй ярьж дууссаны дараа дуудлагыг дуусгах **шар товч** идэвхжиж харагдана. Зураг дээр **улаан өнгөөр** тэмдэглэсэн шар товч дээр дарахад дуудлага хийсэн иргэний зан төлвийг үнэлэх хэсэг гарч ирнэ. Энэхүү цонх дээр мөн давхар гарч ирж буй **“CallBack”** нэртэй ногоон товч дээр дарснаар **эргэн холбогдолт** үүсгэх боломжтой.

![callback arga 1](/img/end-emoji.png)

**Callback** товчыг сонгох үед дор зурагт үзүүлсний дагуу цонх гарч ирнэ. Зурагт **улаан өнгөөр** тэмдэглэсэн талбарууд дээр эргэн холбогдох хугацаа, эргэн холбогдох шалтгаан, эргэн холбогдох зэрэглэл, даалгавар хуваарилах ажилтан сонгоно. Эдгээр үйлдлүүдийг хийсний дараа зан төлвийг үнэлэх үед дуудлага дуусч доорх цонх автоматаар хаагдана.

![callback arga 1](/img/callback-1.png)

### Эргэн холбогдох даалгавар үүсгэх арга 2

1. Дуудлага удирдах цонхруу орно. Дугаар цуглуулах товч дээр дарж, эргэн холбогдох даалгавар үүсгэх гэж буй утасны дугаараа оруулж callback товч дээр дарна.

2. Эргэн холбогдолт үүсгэх арга 1 дээр үзүүлсэнтэй ижил байдлаар эргэн холбогдох даалгавар үүсгэх холбогдох талбаруудыг бөглөснөөр эргэн холбогдох даалгавар үүснэ.

![callback arga 2](/img/call-window.png)

![callback arga 2](/img/callback-2.png)

![callback arga 2](/img/callback-2e.png)

- **Агент хариу өгсөн** – Эргэн холбогдох жагсаалтанд орсон боловч хэрэглэгч өөрөө дахин гаднаас залгасан, тухайн дуудлагыг хүлээн авсан оператор хэрэгэлгчид хариу өгч эргэн холбогдох жагсаалт дээр тэмдэглэл хийсэн бол энэхүү төлвөөр харагдана.

- **Амжилттай холбогдсон** – Эргэн холбогдох жагсаалтын дагуу амжилттай залгаж холбогдсон дуудлага

**Даалгавар хаах** – Зураг дээр харагдаж буй даалгаварын ард харагдах **залгах товч** дээр дарснаар хэрэглэгчрүү шууд залгах үйлдэл хийгдэнэ. Даалгаварын жагсаалтын ард харагдах **туг** дээр дарснаар хэрэглэгчрүү залгахгүйгээр эсвэл дуудлага амжилтгүй болсон тохиолдолд холбогдох төрлөөр бүртгэж хаах боломжтой.

![callback haah](/img/callback-close.png)

**Даалгавар засах** – Эргэн холбогдох даалгаварыг хариуцаж байгаа ажилтныг сольж өөр ажилтанд шилжүүлэх, мэдээллийг засах, эргэн холбогдох хугацааг хойшлуулах, устгах зэрэг үйлдлийг хийх боломжтой. Эргэн холбогдох даалгавар бүхий жагсаалтыг Excel-р тайлан хэлбэрээр татан авах боломжтой бөгөөд дэлгэцийн хамгийн дор байрлах excel гэсэн товч дээр дарж татаж авна.

## Алдсан дуудлагатай ажиллах заавар

Системд холбогдсон дугаарууд руу иргэд гаднаас залгаад холбогдож чадаагүй тохиолдолд буюу дуудлага амжилтгүй болсон, оператортой ярьж чадаагүй тохиолдолд тухайн дуудлага нь системийн алдсан дуудлагын жагсаалтанд нэмэгдэнэ.

![aldsan duudlaga shalgah](/img/callback-method.png)

**Алдсан дуудлага** - Эргэн холбогдох цэсрүү нэвтрэхэд дэлгэцийн баруун дээд буланд агент бүртгэсэн болон алдсан дуудлага, voice дуудлага гэсэн жагсаалт харагдах бөгөөд алдсан дуудлага гэсэн сонголт дээр дарснаар нийт алдсан дуудлагын жагсаалтыг харах боломжтой.

![aldsan duudlagaas hailt hiih](/img/callback-search.png)

### Хайлтууд

- **Эхлэх хугацаа**, **дуусах хугацаа** – Тодорхой хугацааны хооронд болон жагсаалт эхлэх хугацаа, дуусах хугацааг сонгож шүүлт хийх боломжтой.

- **Залгасан дугаар** – Иргэний залгасан дугаараар хайлт хийх боломжтой.

- **Холбогдсон дотуур дугаар** – Ажилтны холбогдсон дотуур дугаараар хайлт хийх боломжтой.

![aldsan duudlaga ergen holbogdoh](/img/callback-callicon.png)

### Төлөв

- **Нийт** – Нийт алдсан дуудлагын жагсаалтыг харах

- **Эргэн холбогдоогүй** – Эргэж холбогдоогүй байгаа алдсан дуудлагын жагсаалтууд харагдана.

- **Амжилтгүй холбогдсон** – Алдсан дуудлагын жагсаалтын дагуу иргэнрүү залгасан боловч амжилттай холбогдож чадаагүй эсвэл оператор нь залгалт хийхгүйгээр шууд даалгаварыг хаасан тохиолдолд энэхүү жагсаалтанд харагдана.

- **Өөрөө холбогдсон** – Иргэний дуудлага амжилтгүй болоод алдсан дуудлагын жагсаалтанд орсон бөгөөд оператор эргэж холбогдож амжаагүй байхад иргэн өөрөө дахиж холбогдоод оператортой амжилттай ярьсан тохиолдолд алдсан дуудлагын нээлттэй жагсаалтаас авто хасагдаж энэхүү төлөвт орно. Өөрөөр хэлбэл хэрэглэгч амжилттай холбогдчихсон тул оператор дахиж залгах шаардлагагүй гэж үзнэ.

- **Амжилттай холбогдсон** - Алдсан дуудлагаас эргэн холбогдоогүй улаан хүрээтэй жагсаалтаас ногоон утасны icon дээр дарж эргэн холбогдсон тохиолдолд амжилттай дуудлага төлөвт орно.

![aldsan duudlaga tailan tatah](/img/callback-report.png)

**Тайлан татах** - Алдсан дуудлагын жагсаалтыг excel хэлбэрээр тайлан болгож татах үйлдэл хийнэ.

**Хугацаа хэтэрсэн** - Мөн алдсан дуудлага жагсаалтанд орсноос хойш иргэн рүү 20 минутын дотор холбогдоогүй тохиолдолд хугацаа хэтэрсэн төлөвт орох бөгөөд дэлгэцийн баруун дээд талд хугацаа хэтэрсэн төлвөөр харагдана.

**Ярианы бичлэг** - Хэрэглэгчтэй эргэж холбогдсоны дараа оператортой ярьсан ярианы бичлэг мөн жагсаалт дээр харагдах бөгөөд сонсох боломжтой байна. Ярианы бичлэг сонсох эрх нь системийн эрхийн түвшний дагуу зохицуулагдана.

## Voice дуудлагатай ажиллах заавар

Иргэдийн дуудлагыг хүлээн авах нэгдсэн утас дуудлагын ачаалалтай үе болон ажлын бус цагаар иргэдийн дуудлагыг шуурхай хүлээн авах боломжгүй байгаа үед иргэд войс смс үлдээх боломжтой байна. Иргэдийн үлдээсэн войс смс нь ярианы бичлэгийн хамт жагсаалт болон системд автоматаар үүсэх бөгөөд дараах байдлаар харагдана.

![voice callback](/img/voice-callback.png)

**Voice callback** - Системийн меню цэснээс эргэн холбогдох цэсийг сонгож орно. Дэлгэцийн баруун дээд буланд гарч ирэх сонголтуудаас войс callback сонголтыг хийснээр жагсаалт бүхий войс дуудлагууд гарч ирнэ.

### Хайлтууд

- **Эхлэх хугацаа**, **дуусах хугацаа** – Тодорхой хугацааны хооронд болон жагсаалт эхлэх хугацаа, дуусах хугацааг сонгож шүүлт хийх боломжтой.

- **Залгасан дугаар** – Иргэний залгасан дугаараар хайлт хийх боломжтой.

- **Холбогдсон дотуур дугаар** – Ажилтны холбогдсон дотуур дугаараар хайлт боломжтой.

### Төлөв сонгох

- **Нийт** – Нийт войс дуудлагын жагсаалтыг харах

- **Эргэн холбогдоогүй** – Эргэж холбогдоогүй байгаа войс дуудлагын жагсаалтууд харагдана.

- **Амжилтгүй холбогдсон** – Войс дуудлагын жагсаалтын дагуу иргэнрүү залгасан боловч амжилттай холбогдож чадаагүй эсвэл оператор нь залгалт хийхгүйгээр шууд даалгаварыг хаасан тохиолдолд энэхүү жагсаалтанд харагдана.

- **Агент хариу өгсөн** – Эргэн холбогдох жагсаалтанд орсон боловч хэрэглэгч өөрөө дахин гаднаас залгасан, тухайн дуудлагыг хүлээн авсан оператор хэрэглэгчид хариу өгч эргэн холбогдох жагсаалт дээр тэмдэглэл хийсэн бол энэхүү төлвөөр харагдана.

- **Амжилттай холбогдсон** – Войс дуудлагын жагсаалтын дагуу эргэж холбогдсон амжилтай дуудлагууд харагдана.
  Тайлан татах - Алдсан дуудлагын жагсаалтыг excel хэлбэрээр тайлан болгож татах үйлдэл хийнэ.

- **Хугацаа хэтэрсэн** - Мөн войс дуудлага жагсаалтанд орсноос хойш иргэнрүү 20 минутын дотор холбогдоогүй тохиолдолд хугацаа хэтэрсэн төлөвт орох бөгөөд дэлгэцийн баруун дээд талд хугацаа хэтэрсэн төлвөөр харагдана.

- **Ярианы бичлэг** - Жагсаалт бүхий дуудлаганд иргэний войс үлдээсэн ярианы бичлэг автоматаар шууд орж ирэх бөгөөд мөн иргэний утасны дугаар, войс үлдээсэн хугацаа, эргэн холбогдсон хугацаа, холбогдсон ажилтан, холбогдсон ярианы бичлэг зэрэг бүх холбогдох мэдээлэл харагдана.

**Тайлан татах** - Алдсан дуудлагын жагсаалтыг excel хэлбэрээр тайлан болгож татах үйлдэл хийнэ.

**Хугацаа хэтэрсэн** - Мөн войс дуудлага жагсаалтанд орсноос хойш иргэнрүү 20 минутын дотор холбогдоогүй тохиолдолд хугацаа хэтэрсэн төлөвт орох бөгөөд дэлгэцийн баруун дээд талд хугацаа хэтэрсэн төлвөөр харагдана.

**Ярианы бичлэг** - Жагсаалт бүхий дуудлаганд иргэний войс үлдээсэн ярианы бичлэг автоматаар шууд орж ирэх бөгөөд мөн иргэний утасны дугаар, войс үлдээсэн хугацаа, эргэн холбогдсон хугацаа, холбогдсон ажилтан, холбогдсон ярианы бичлэг зэрэг бүх холбогдох мэдээлэл харагдана.
