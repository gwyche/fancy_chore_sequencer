# Function to restart the script with ExecutionPolicy Bypass
function Restart-With-Bypass {
    Write-Host 'Execution policy is restricted. Restarting script with ''Bypass'' policy...'
    # Restart the script with ExecutionPolicy Bypass
    Start-Process powershell -ArgumentList ('-ExecutionPolicy Bypass -File "' + $PSCommandPath + '"') -Verb RunAs
    exit
}

# Check if the script is running with a restricted execution policy
$executionPolicy = Get-ExecutionPolicy
if ($executionPolicy -eq 'Restricted' -or $executionPolicy -eq 'Undefined') {
    Restart-With-Bypass
}

# Function to check if Docker is installed
function Check-Docker {
    $dockerInstalled = Get-Command docker -ErrorAction SilentlyContinue
    if (-not $dockerInstalled) {
        Write-Host 'Docker not installed. Installing Docker...'
        Invoke-WebRequest -Uri 'https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe' -OutFile (Join-Path $env:TEMP 'DockerDesktopInstaller.exe')
        Start-Process -FilePath (Join-Path $env:TEMP 'DockerDesktopInstaller.exe') -ArgumentList '/quiet' -Wait
        Start-Process -FilePath 'C:\Program Files\Docker\Docker\Docker Desktop.exe' -WindowStyle Hidden
        Write-Host 'Docker installation complete.'
        WaitFor-Docker
    } else {
        Write-Host 'Docker is already installed.'
    }
}

# Function to wait for Docker to be ready
function Wait-For-Docker {
    Write-Host 'Waiting for Docker to become available...'
    while (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
        Start-Sleep -Seconds 5
    }
    Write-Host 'Docker is ready.'
}

# Function to check if Docker Compose is installed
function Check-DockerCompose {
    $dockerComposeInstalled = Get-Command docker-compose -ErrorAction SilentlyContinue
    if (-not $dockerComposeInstalled) {
        Write-Host 'Docker Compose not installed. Please install Docker Compose to proceed.'
        exit
    }
}

# Function to run Docker Compose and start services
function Run-DockerCompose {
    Write-Host 'Running Docker Compose to start services...'
    try {
        docker-compose up --build -d
        Write-Host 'Docker services started.'
    } catch {
        Write-Host 'Failed to start Docker services.'
        exit
    }
}

# Main Execution
Check-Docker
Check-DockerCompose
Wait-For-Docker
Run-DockerCompose
