// NOTE: layout.js is needed for parallel route config
// IMPORTANT: all parallel routes must support same paths/params (eg. year)
export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
