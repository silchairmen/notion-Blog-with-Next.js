import Link from "next/link";

/**
 * @param {lecture: [sublecture1, sublecture2]}
 */
export default async function Lecture(LectureList : any) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-14 mb-14">
          
        {Object.entries(LectureList.LectureList).map(([category, subcategories] : [any, any], categoryIndex) => (
          
          <div key={category} className="pb-4 relative shadow-2xl bg-gray-800 rounded-lg p-4">
            <h1 className="text-4xl font-bold mb-1 text-emerald-600">{category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 py-5">
              {subcategories.map((subLecture:any, index) => (
                <Link href={`/lecture/subLecture?subLectureName=${subLecture}`}>
              <div key={index} className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center text-center hover:animate-bounce" style={{ flex: '1' }}>
                  <div className="text-3xl font-bold mb-2">{subLecture.charAt(0).toUpperCase()}</div>
                  <div className="font-mono underline font-bold underline-offset-4 min-h-12 max-h-12">{subLecture}</div>
              </div>

                </Link>
                
              ))}
            </div>
          </div>
        ))}
      </div>
    )
}