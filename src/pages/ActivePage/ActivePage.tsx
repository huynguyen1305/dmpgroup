import FooterSection from '../HomePage/FooterSection/FooterSection';
import ActivityNew from '../HomePage/Activity/ActivityNew';

function ActivePage() {
  return (
    <div className="w-full h-[100vh] bg-[#4B4F52] relative">
      <ActivityNew />
      <div className="w-full h-[1000px]">
        <FooterSection />
      </div>
    </div>
  );
}

export default ActivePage;
