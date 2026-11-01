export const dynamic = "force-static";

export async function GET() {
  return new Response("google-site-verification: googlef9d914a8a653b120.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
