import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// SendGrid の API Key を設定（Vercel の環境変数に設定）
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // 管理者宛メール
        const adminMsg = {
            to: process.env.ADMIN_EMAIL!, // ←あなたのメール（環境変数で設定）
            from: process.env.FROM_EMAIL!, // ←SendGrid で認証した送信元
            subject: "【Portfolio】新しいお問い合わせがありました",
            html: `
        <h2>新規お問い合わせ</h2>
        <p>姓: ${data.lastName}</p>
        <p>名: ${data.firstName}</p>
        <p>会社名: ${data.company || "(未記入)"}</p>
        <p>メール: ${data.email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p>送信日時: ${new Date().toLocaleString("ja-JP")}</p>
        `,
        };

        // ユーザーへの自動返信メール
        const userMsg = {
            to: data.email,
            from: process.env.FROM_EMAIL!,
            subject: "お問い合わせありがとうございます",
            html: `
        <p>${data.lastName} ${data.firstName} 様</p>
        <p>お問い合わせいただきありがとうございました。</p>
        <p>以下の内容で受け付けました。</p>

        <hr />
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr />

        <p>担当者より後ほどご連絡いたしますので、今しばらくお待ちください。</p>
        `,
        };

        // メール送信
        await sgMail.send(adminMsg);
        await sgMail.send(userMsg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("SendGrid Error:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
