import Lecture from "../../components/lecture";
import { GetLectureList } from "../../contents/notionAPI"


export default async function LectureSection(){

    const LectureList = await GetLectureList();

    return (
      <Lecture LectureList={LectureList} />
    )
}