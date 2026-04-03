export type HomeStatIcon = "star" | "trend" | "boxes" | "paper";

export const stats = [
  { value: "3.2k+", label: "GitHub Stars", icon: "star" },
  { value: "1.5w+", label: "CSDN 粉丝", icon: "trend" },
  { value: "1w+", label: "开源下载量", icon: "boxes" },
  { value: "2", label: "中科院一区论文", icon: "paper" },
] satisfies Array<{
  value: string;
  label: string;
  icon: HomeStatIcon;
}>;
