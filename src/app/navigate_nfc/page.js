import Link from "next/link";
import s from "./page.module.css"

export default function Page() {
    return (<>
        <div className={s.navigatePage}>
            <section className={s.main}>
                <p>出勤登録用のNFCタグに<br/>スマホをかざして下さい</p>

                <img src="/tuch-nfc-icon.jpg"/>
            </section>
            <section className={s.sub}>
                <p>※NFCタグを読み込めなかった場合は<br/>QRコードから出勤登録をして下さい</p>
                <p>※もし間違えて決定を押してしまった場合は戻るボタンから再登録してください</p>
                <Link href="/sign_in"><button className={s.backBtn}>戻る</button></Link>
            </section>
        </div>
    </>)
}