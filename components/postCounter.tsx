import { GetPostCount } from "../contents/notionAPI";


export default async function PostCounter() {
    let counter = 0;
    
    // 역동적인 화면을 위하여 counter은 1.5초 뒤에 반환함
    await new Promise((resolve) => setTimeout(resolve, 1000));

    counter = await GetPostCount();

    return (
        <h3 className="text-1xl text-cyan-500 font-bold">Total docx in blog : {counter}</h3>
    )
    
}