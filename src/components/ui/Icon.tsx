import {
  Activity, Archive, AudioLines, BarChart3, Boxes, Captions, Cloud, Cpu, EarOff, EyeOff, FileText, Globe,
  GraduationCap, Headset, IndianRupee, LayoutDashboard, Languages, ListChecks, Lock, MessageCircleQuestion,
  MessageSquareText, MonitorDot, NotebookPen, Phone, PhoneIncoming, Radar, Server, Settings2, ShieldCheck,
  Siren, Sparkles, Tags, Users, type LucideIcon, type LucideProps,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  Activity, Archive, AudioLines, BarChart3, Boxes, Captions, Cloud, Cpu, EarOff, EyeOff, FileText, Globe,
  GraduationCap, Headset, IndianRupee, LayoutDashboard, Languages, ListChecks, Lock, MessageCircleQuestion,
  MessageSquareText, MonitorDot, NotebookPen, Phone, PhoneIncoming, Radar, Server, Settings2, ShieldCheck,
  Siren, Sparkles, Tags, Users,
}

/** Icon by name, so content.ts can refer to icons as plain strings. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name] ?? Sparkles
  return <Cmp aria-hidden="true" {...props} />
}
