// app/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
    const [form, setForm] = useState({
        lastName: "",
        firstName: "",
        company: "",
        email: "",
        confirmEmail: "",
        message: "",
    });

    // input ハンドラ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    // 送信処理
    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.email !== form.confirmEmail) {
            alert("メールアドレスが一致しません");
            return;
        }

        try {
            await addDoc(collection(db, "contacts"), {
                ...form,
                createdAt: serverTimestamp(),
            });

            alert("送信が完了しました！");

            setForm({
                lastName: "",
                firstName: "",
                company: "",
                email: "",
                confirmEmail: "",
                message: "",
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("送信に失敗しました");
        }
    };

    return (
        <section className="contact s-wrapper" id="contact">
            <h2 className="section_title">Contact</h2>

            <form onSubmit={submitForm} className="contact-form">
                {/* 名前 */}
                <div className="form-group">
                    <label className="form-label">
                        名前 <span className="badge badge-required">必須</span>
                    </label>

                    <div className="name-fields">
                        <div>
                            <label htmlFor="lastName">姓</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="山田"
                                value={form.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="firstName">名</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="太郎"
                                value={form.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* 会社名 */}
                <div className="form-group">
                    <label className="form-label">
                        会社名 <span className="badge badge-optional">任意</span>
                    </label>

                    <input
                        id="company"
                        type="text"
                        placeholder="会社名"
                        value={form.company}
                        onChange={handleChange}
                    />
                    <small className="note">特になければ未記入で結構です。</small>
                </div>

                {/* メール */}
                <div className="form-group">
                    <label className="form-label">
                        メールアドレス <span className="badge badge-required">必須</span>
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* メール確認 */}
                <div className="form-group">
                    <label className="form-label">確認のため再度ご入力ください</label>

                    <input
                        id="confirmEmail"
                        type="email"
                        placeholder="mail@example.com"
                        value={form.confirmEmail}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* メッセージ */}
                <div className="form-group">
                    <label className="form-label">
                        お問い合わせ内容 <span className="badge badge-required">必須</span>
                    </label>

                    <textarea
                        id="message"
                        rows={6}
                        placeholder="お問い合わせ内容を入力してください"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* 送信ボタン */}
                <button type="submit" className="submit-btn">
                    送信
                </button>
            </form>
        </section>
    );
}
