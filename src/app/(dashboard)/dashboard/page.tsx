import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Users, FileText, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Views",
    value: "24,583",
    change: "+12.5%",
    icon: Eye,
  },
  {
    title: "Visitors",
    value: "8,234",
    change: "+8.2%",
    icon: Users,
  },
  {
    title: "Blog Posts",
    value: "42",
    change: "+3",
    icon: FileText,
  },
  {
    title: "Projects",
    value: "18",
    change: "+2",
    icon: TrendingUp,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 pt-20 sm:p-6 lg:p-8 lg:pt-8">
      <div>
        <h1 className="mb-2 font-sans text-3xl font-semibold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Overview of your portfolio performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-card-foreground">{stat.value}</div>
                <p className="text-xs text-primary">{stat.change} from last month</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New blog post published", time: "2 hours ago" },
                { action: "Project updated", time: "5 hours ago" },
                { action: "New visitor from GitHub", time: "1 day ago" },
                { action: "Blog post edited", time: "2 days ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <p className="text-sm text-card-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Top Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Building accessible components", views: "1,234" },
                { title: "Next.js performance tips", views: "987" },
                { title: "Design systems guide", views: "856" },
                { title: "Modern CSS techniques", views: "743" },
              ].map((content, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <p className="text-sm text-card-foreground">{content.title}</p>
                  <p className="text-xs text-muted-foreground">{content.views} views</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
