interface ProjectConfig {
    PORT: string
}

export const webConfig: ProjectConfig = {
    PORT: process.env.PORT || '3000'
}
