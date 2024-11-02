import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams : Promise<{query?: string}>
}) {
  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id:1},
    _id: 1,
    description : "This is a description",
    image : "https://www.google.com/imgres?q=robot&imgurl=https%3A%2F%2Fstatic.promediateknologi.id%2Fcrop%2F0x0%3A0x0%2F750x500%2Fwebp%2Fphoto%2Fp1%2F447%2F2024%2F05%2F11%2FDokumen-tanpa-judul_20240511_155823_0000-2201005000.png&imgrefurl=https%3A%2F%2Fwww.jurnaltinta.com%2Fotomotif%2F44712640511%2Fsolusi-pelatihan-untuk-robotika-ai-telah-ditemukan-robot-siap-tangani-tugas-baru-dengan-cepat&docid=jzu0y3bZrCTgDM&tbnid=iqJ9JLzkPMV2pM&vet=12ahUKEwjvitLu57yJAxU5xjgGHVaIIqsQM3oECCkQAA..i&w=750&h=500&hcb=2&ved=2ahUKEwjvitLu57yJAxU5xjgGHVaIIqsQM3oECCkQAA",
    category: 'Robots',
    title : 'We Robots'
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreuners  
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post : StartupCardType, index : number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>

      </section>
    </>
  );
}
