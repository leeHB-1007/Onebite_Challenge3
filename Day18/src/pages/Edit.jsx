import { useParams } from "react-router-dom"
export default function Edit() {
    const params = useParams();
    return (
        <div>{params.id}번 edit page 입니다.</div>
    )
}