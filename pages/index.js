import Image from 'next/image'
import Accordion from '@/components/Accordion'
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Index() {
  return (
    <div lang='ar' dir='rtl' className='main-cont'>
   
    <div className='image' >
      <Image src='/images/robot-handshake-human-background-futuristic-digital-age-PhotoRoom.png-PhotoRoom.png' width={500} height={300} alt="" className='image-comp'/>
    </div>
    <div className='head main' 
    id='a'>  
    <h2>الذكاء الاصطناعي</h2>
      <p>تعد ثورة الذكاء الاصطناعي من أهم الثورات التكنولوجية التي شهدها العالم في العقود الأخيرة، وتمثل تغييرًا جذريًا في طريقة تفكيرنا وتعاملنا مع التكنولوجيا والحياة بشكل عام.</p>
      <a href="#c"><button className='prm-btn'> التعرف على المزيد <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></a>
    </div>

    

    <div className='head second' id='b'>
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

    <div className='head' id='c'>
    <h2>ادوات تستعمل الذكاء الاصطناعي</h2>
      <div className='caty' >
        
        <h3>ChatGPT</h3>
        <div >
        <Image src='/images/chatgpt.png' width={250} height={150} alt="" className='img-caty'/>

        </div>
        <p>تم تطوير ChatGPT باستخدام تقنية التعلم العميق الحديثة المعروفة باسم GPT-3.5 وهو نموذج لغوي كبير يتم تدريبه على مجموعة واسعة من النصوص والبيانات اللغوية. يمكن استخدام ChatGPT لإجراء محادثات ذكية ومتقدمة مع المستخدمين عبر الإنترنت، حيث يستطيع النموذج فهم اللغة الطبيعية والرد على الأسئلة وتقديم المعلومات بشكل سلس وسريع. ويمكن استخدام ChatGPT لأغراض مختلفة مثل الدعم الفني، التفاعل الاجتماعي، المساعدة في المهام اليومية، والمزيد.</p>
        <a href="https://openai.com/blog/chatgpt" target='_blank'>قم بتجربته </a>

      </div>
      
      
      <div className='caty'>
        <h3>Poe</h3>
        <div >
        <Image src='/images/poe.png' width={150} height={150} alt="" className='img-caty'/>

        </div>
        <p>تطبيق Poe هو تطبيق تحليل النصوص الذي يستخدم تقنيات التعلم العميق والذكاء الاصطناعي لتحويل النصوص إلى بيانات قابلة للتشغيل. يستخدم التطبيق تحليل اللغوي النصي لفهم النصوص والكشف عن المعاني المخفية والعلاقات بينها. ويستخدم تقنيات التعلم العميق لتحسين دقة التحليل وتوفير نتائج سريعة ودقيقة.</p>
        <a href="https://apps.apple.com/us/app/poe-fast-ai-chat/id1640745955" target='_blank'>قم بتجربته </a>
      </div>
      
      
      {/* <div className='card'>
        <div className='card-img'>
          <Image src='/images/poe.png' width={200} height={200} alt="poe logo" className='card-img-cu'/>

        </div>

        <div className='card-info'>
          <h4>Poe</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit nam aut magni sit, enim eveniet harum maxime ratione quidem quos iste est. Qui maxime ab animi facilis magnam quasi.</p>
        </div>
      </div> */}
    
    </div>
    
    </div>
  )
}

export default Index