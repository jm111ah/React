import dummy from "../db/data.json"

export default function Day(){
    return 
    <table>
        <tbody>
            {words.map(words => (
                <tr>
                    <td>{words.eng}</td>
                    <td>{words.kor}</td>
                </tr>              
            ))}
        </tbody>
    </table>
}