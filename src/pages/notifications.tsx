import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function NotificationPage() {
    const appData = useAppData()
    return (
        <Layout title="Notification" subtitle="">
           <h3>{appData.theme}</h3>
        </Layout>
    )
}