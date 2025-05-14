import ProjectList from "../projectList/ProjectList";
import Card from "../card/Card";

export default function ProjectAbout({ pledges, onOpenModal }) {
  if (!pledges || pledges.length === 0) {
    return <p>No pledges available for this project.</p>;
  }

  return (
    <Card>
      <h2 className="text-lg font-bold mb-6 sm:text-xl sm:mb-9">
        About this project
      </h2>
      <p className="text-sm leading-6 text-sonic-silver mb-9 sm:text-base sm:leading-8">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <br />
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <ProjectList pledges={pledges} onOpenModal={onOpenModal} />
    </Card>
  );
}
