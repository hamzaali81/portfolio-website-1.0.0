import Image from "next/image";
import { useRouter } from 'next/router'

export default function ProjectById() {
    const router = useRouter()
    const { project } = router.query
    console.log('project',project);
  return (
    <main className="mt-10 leading-6">
      {project}
    </main>
  );
}
