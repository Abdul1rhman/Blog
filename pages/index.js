import Image from 'next/image'
import Accordion from '@/components/Accordion'
function Index() {
  return (
    <div lang='ar' dir='rtl' className='main-cont'>
   
    <div className='image'>
      <Image src='/images/robot-handshake-human-background-futuristic-digital-age-PhotoRoom.png-PhotoRoom.png' width={500} height={300} alt="" className='image-comp'/>
    </div>
    <div className='head main'>
    <h2>الذكاء الاصطناعي</h2>
      <p>تعد ثورة الذكاء الاصطناعي من أهم الثورات التكنولوجية التي شهدها العالم في العقود الأخيرة، وتمثل تغييرًا جذريًا في طريقة تفكيرنا وتعاملنا مع التكنولوجيا والحياة بشكل عام.</p>
<a href="#s"><button className='prm-btn'>التعرف على المزيد</button></a>
    </div>

    

    <div className='head second' id='s'>
      <h2>استخداماته</h2>
      <div className='accor'>
        <Accordion
        title="1-  التعلم الآلي والتنبؤ"
            content={
              <p>
              يتم استخدام الذكاء الاصطناعي في تطوير نماذج التعلم الآلي والتنبؤية، وذلك في العديد من المجالات مثل التجارة الإلكترونية والتسويق الرقمي والرعاية الصحية والمالية. ويساعد هذا الاستخدام على تعزيز دقة التنبؤ وتحسين النتائج.
              </p>
            }
        />

<Accordion
        title="2- المحادثات مع الروبوتات"
            content={
              <p>
              يتم استخدام الذكاء الاصطناعي في تطوير الروبوتات والأجهزة الذكية التي يمكن التحدث إليها والتفاعل معها بشكل مماثل للتفاعل مع الإنسان. ويساعد هذا الاستخدام على تحسين تجربة المستخدم وجعل الأجهزة الذكية أكثر فعالية وفائدة.
              </p>
            }
        />

<Accordion
        title="3- التشخيص الطبي"
            content={
              <p>
              يتم استخدام الذكاء الاصطناعي في تطوير أنظمة التشخيص الطبي الذاتي والمساعدة على صنع القرارات الطبية. ويساعد هذا الاستخدام على تحسين دقة التشخيص وتحسين جودة الرعاية الصحية بشكل عام.
              </p>
            }
        />

        
      </div>

      
    

    </div>
    
    </div>
  )
}

export default Index