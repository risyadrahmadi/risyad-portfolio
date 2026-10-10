"use client";

import { useEffect, useRef, useState } from "react";

type StageStatus = "idle" | "running" | "success" | "error" | "skipped";

type Stage = {
  title: string;
  description: string;
};

const pipelineStages: Stage[] = [
  {
    title: "Checkout & Lint",
    description: "Klon repositori & cek sintaks",
  },
  {
    title: "Security Gate",
    description: "SonarQube & Trivy scan",
  },
  {
    title: "Docker Build",
    description: "Build image & push ke Harbor",
  },
  {
    title: "Cloud Deploy",
    description: "Rolling update ke Kubernetes",
  },
];

const successLogs = [
  "$ git checkout main",
  "✓ repository checkout complete",
  "",
  "$ npm run lint",
  "✓ 0 errors",
  "",
  "$ trivy image app:v0.1.8",
  "✓ no critical vulnerabilities",
  "",
  "$ docker build -t harbor.local/app:v0.1.8 .",
  "✓ image built successfully",
  "",
  "$ docker push harbor.local/app:v0.1.8",
  "✓ pushed successfully",
  "",
  "$ kubectl rollout status deployment/app",
  "✓ deployment successfully rolled out",
  "",
  "Pipeline completed successfully.",
];

const errorLogs = [
  "$ git checkout main",
  "✓ repository checkout complete",
  "",
  "$ npm run lint",
  "✓ 0 errors",
  "",
  "$ trivy image app:v0.1.8",
  "✗ HIGH vulnerability detected",
  "",
  "Security Gate failed.",
  "",
  "Docker Build → SKIPPED",
  "Cloud Deploy → SKIPPED",
  "",
  "Pipeline stopped.",
];

const gitopsStages = [
  {
    title: "Git Commit",
    description: "Image tag v0.1.8 di-push ke repository",
  },
  {
    title: "ArgoCD Detect",
    description: "ArgoCD mendeteksi perubahan manifest",
  },
  {
    title: "ArgoCD Sync",
    description: "Manifest baru diterapkan ke cluster",
  },
  {
    title: "Kubernetes",
    description: "Deployment rollout hingga pod Ready",
  },
];

const gitopsLogs = [
  "$ git commit -m \"release v0.1.8\"",
  "✓ commit created",
  "",
  "$ git push origin main",
  "✓ changes pushed",
  "",
  "ArgoCD: new revision detected",
  "✓ application out-of-sync",
  "",
  "$ argocd app sync web",
  "✓ sync completed",
  "",
  "$ kubectl rollout status deployment/web",
  "✓ deployment successfully rolled out",
  "",
  "web → Synced / Healthy",
  "3/3 pods Running",
];

export default function LabWorkbench() {
  const [activeTab, setActiveTab] = useState(0);

  // CI/CD
  const [statuses, setStatuses] = useState<StageStatus[]>(
    pipelineStages.map(() => "idle")
  );
  const [logs, setLogs] = useState<string[]>([
    'Terminal siap. Klik "Jalankan Pipeline" untuk memulai simulasi.',
  ]);
  const [running, setRunning] = useState(false);
  const [securityError, setSecurityError] = useState(false);

  // GitOps
  const [gitopsStatuses, setGitopsStatuses] = useState<StageStatus[]>(
    gitopsStages.map(() => "idle")
  );
  const [gitopsRunning, setGitopsRunning] = useState(false);
  const [gitopsLogs, setGitopsLogs] = useState<string[]>([
    'GitOps siap. Klik "Simulasikan Deploy" untuk memulai.',
  ]);

  // Observability
  const [observabilityRunning, setObservabilityRunning] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [metrics, setMetrics] = useState({
    cpu: 42,
    memory: 61,
    requests: 824,
    latency: 48,
  });

  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const clearTimers = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  };

  const resetPipeline = () => {
    clearTimers();

    setRunning(false);
    setSecurityError(false);
    setStatuses(pipelineStages.map(() => "idle"));
    setLogs([
      'Terminal siap. Klik "Jalankan Pipeline" untuk memulai simulasi.',
    ]);
  };

  const runPipeline = (simulateError = false) => {
    if (running) return;

    clearTimers();

    setRunning(true);
    setSecurityError(simulateError);
    setStatuses(["running", "idle", "idle", "idle"]);
    setLogs([]);

    const selectedLogs = simulateError ? errorLogs : successLogs;

    selectedLogs.forEach((log, index) => {
      const timer = window.setTimeout(() => {
        setLogs((current) => [...current, log]);
      }, index * 180);

      timers.current.push(timer);
    });

    const stageDelay = 1100;

    pipelineStages.forEach((_, index) => {
      if (simulateError && index > 1) return;

      const timer = window.setTimeout(() => {
        if (simulateError && index === 1) {
          setStatuses((current) => {
            const next = [...current];
            next[index] = "error";

            for (let i = index + 1; i < next.length; i++) {
              next[i] = "skipped";
            }

            return next;
          });

          setRunning(false);
          return;
        }

        setStatuses((current) => {
          const next = [...current];

          next[index] = "success";

          if (index < next.length - 1) {
            next[index + 1] = "running";
          }

          return next;
        });

        if (index === pipelineStages.length - 1) {
          setRunning(false);
        }
      }, stageDelay * (index + 1));

      timers.current.push(timer);
    });
  };

  const runGitOps = () => {
    if (gitopsRunning) return;

    clearTimers();

    setGitopsRunning(true);
    setGitopsStatuses(["running", "idle", "idle", "idle"]);
    setGitopsLogs([]);

    gitopsLogs.forEach((log, index) => {
      const timer = window.setTimeout(() => {
        setGitopsLogs((current) => [...current, log]);
      }, index * 200);

      timers.current.push(timer);
    });

    gitopsStages.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setGitopsStatuses((current) => {
          const next = [...current];

          next[index] = "success";

          if (index < next.length - 1) {
            next[index + 1] = "running";
          }

          return next;
        });

        if (index === gitopsStages.length - 1) {
          setGitopsRunning(false);
        }
      }, 1000 * (index + 1));

      timers.current.push(timer);
    });
  };

  const resetGitOps = () => {
    clearTimers();

    setGitopsRunning(false);
    setGitopsStatuses(gitopsStages.map(() => "idle"));
    setGitopsLogs([
      'GitOps siap. Klik "Simulasikan Deploy" untuk memulai.',
    ]);
  };

  const simulateTraffic = () => {
    if (observabilityRunning) return;

    clearTimers();

    setObservabilityRunning(true);
    setAlertActive(false);

    setMetrics({
      cpu: 42,
      memory: 61,
      requests: 824,
      latency: 48,
    });

    const timer1 = window.setTimeout(() => {
      setMetrics({
        cpu: 68,
        memory: 74,
        requests: 1280,
        latency: 120,
      });
    }, 700);

    const timer2 = window.setTimeout(() => {
      setMetrics({
        cpu: 91,
        memory: 88,
        requests: 1842,
        latency: 420,
      });

      setAlertActive(true);
      setObservabilityRunning(false);
    }, 1500);

    timers.current.push(timer1, timer2);
  };

  const resetObservability = () => {
    clearTimers();

    setObservabilityRunning(false);
    setAlertActive(false);

    setMetrics({
      cpu: 42,
      memory: 61,
      requests: 824,
      latency: 48,
    });
  };

  return (
    <section className="lab-section" id="lab">
      <div className="wrap">
        <div className="lab-heading">
          <div className="lab-kicker">
            LAB WORKBENCH <span>• (04)</span>
          </div>

          <h2>Interactive Engineering Simulator.</h2>

          <p>
            Interactive DevOps workflow experiments and simulations, right in your browser.
          </p>
        </div>

        <div className="lab-tabs" role="tablist">
          {[
            "CI/CD Pipeline",
            "GitOps & K8s",
            "Observability & Alarm",
          ].map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              <span>{index + 1}.</span> {tab}
            </button>
          ))}
        </div>

        {/* ================= CI/CD ================= */}

        {activeTab === 0 && (
          <div className="lab-panel">
            <div className="lab-panel-head">
              <div>
                <div className="lab-label">SIMULATOR PIPELINE CI/CD</div>

                <h3>
                  Test my release automation interactively. 
                </h3>

                <p>
                  Simulate the entire process from source code to Kubernetes deployment.
                </p>
              </div>

              <div className="lab-actions">
                <button
                  type="button"
                  className="lab-btn lab-btn-main"
                  onClick={() => runPipeline(false)}
                  disabled={running}
                >
                  {running ? "Pipeline Berjalan..." : "Run Pipeline"}
                </button>

                <button
                  type="button"
                  className="lab-btn"
                  onClick={() => runPipeline(true)}
                  disabled={running}
                >
                  Simulate Failure
                </button>

                <button
                  type="button"
                  className="lab-btn lab-btn-reset"
                  onClick={resetPipeline}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="lab-stages">
              {pipelineStages.map((stage, index) => {
                const status = statuses[index];

                return (
                  <div className={`lab-stage ${status}`} key={stage.title}>
                    <div className="lab-stage-number">
                      {status === "success"
                        ? "✓"
                        : status === "error"
                          ? "!"
                          : status === "skipped"
                            ? "–"
                            : index + 1}
                    </div>

                    <div className="lab-stage-content">
                      <h4>{stage.title}</h4>
                      <p>{stage.description}</p>
                    </div>

                    <div className="lab-stage-status">
                      {status === "idle" && "READY"}
                      {status === "running" && "RUNNING"}
                      {status === "success" && "PASSED"}
                      {status === "error" && "FAILED"}
                      {status === "skipped" && "SKIPPED"}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lab-output">
              <div className="lab-output-head">
                <span className="terminal-dots">
                  <i />
                  <i />
                  <i />
                </span>

                <span>Output Terminal Agen Runner</span>
              </div>

              <div className="lab-terminal">
                {logs.map((log, index) => (
                  <div
                    key={`${index}-${log}`}
                    className={
                      log.startsWith("✓")
                        ? "log-success"
                        : log.startsWith("✗")
                          ? "log-error"
                          : log.startsWith("$")
                            ? "log-command"
                            : ""
                    }
                  >
                    {log || "\u00a0"}
                  </div>
                ))}

                {running && <span className="lab-cursor" />}
              </div>
            </div>

            <div className="lab-info">
              <span>
                {securityError
                  ? "Security Gate mendeteksi vulnerability."
                  : running
                    ? "Pipeline sedang dieksekusi..."
                    : statuses.every((status) => status === "idle")
                      ? "Menunggu eksekusi..."
                      : "Simulasi selesai."}
              </span>
            </div>
          </div>
        )}

        {/* ================= GITOPS ================= */}

        {activeTab === 1 && (
          <div className="lab-panel">
            <div className="lab-panel-head">
              <div>
                <div className="lab-label">SIMULATOR GITOPS & KUBERNETES</div>

                <h3>Simulasikan deployment berbasis GitOps.</h3>

                <p>
                  Lihat bagaimana perubahan image dari Git diproses ArgoCD
                  hingga deployment Kubernetes menjadi Healthy.
                </p>
              </div>

              <div className="lab-actions">
                <button
                  type="button"
                  className="lab-btn lab-btn-main"
                  onClick={runGitOps}
                  disabled={gitopsRunning}
                >
                  {gitopsRunning
                    ? "Deployment Berjalan..."
                    : "Simulasikan Deploy"}
                </button>

                <button
                  type="button"
                  className="lab-btn"
                  onClick={resetGitOps}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="lab-stages">
              {gitopsStages.map((stage, index) => {
                const status = gitopsStatuses[index];

                return (
                  <div className={`lab-stage ${status}`} key={stage.title}>
                    <div className="lab-stage-number">
                      {status === "success" ? "✓" : index + 1}
                    </div>

                    <div className="lab-stage-content">
                      <h4>{stage.title}</h4>
                      <p>{stage.description}</p>
                    </div>

                    <div className="lab-stage-status">
                      {status === "idle" && "WAITING"}
                      {status === "running" && "SYNCING"}
                      {status === "success" && "HEALTHY"}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lab-output">
              <div className="lab-output-head">
                <span className="terminal-dots">
                  <i />
                  <i />
                  <i />
                </span>

                <span>Output Terminal ArgoCD</span>
              </div>

              <div className="lab-terminal">
                {gitopsLogs.map((log, index) => (
                  <div
                    key={`${index}-${log}`}
                    className={
                      log.startsWith("✓")
                        ? "log-success"
                        : log.startsWith("$")
                          ? "log-command"
                          : ""
                    }
                  >
                    {log || "\u00a0"}
                  </div>
                ))}

                {gitopsRunning && <span className="lab-cursor" />}
              </div>
            </div>

            <div className="lab-info">
              {gitopsRunning
                ? "ArgoCD sedang melakukan sync..."
                : gitopsStatuses.every((status) => status === "idle")
                  ? "Menunggu deployment..."
                  : "Application Synced / Healthy · 3/3 Pods Running"}
            </div>
          </div>
        )}

        {/* ================= OBSERVABILITY ================= */}

        {activeTab === 2 && (
          <div className="lab-panel">
            <div className="lab-panel-head">
              <div>
                <div className="lab-label">
                  SIMULATOR OBSERVABILITY & ALARM
                </div>

                <h3>Simulasikan kondisi monitoring server.</h3>

                <p>
                  Lihat perubahan CPU, memory, request rate, latency, hingga
                  trigger alarm seperti pada monitoring environment DevOps.
                </p>
              </div>

              <div className="lab-actions">
                <button
                  type="button"
                  className="lab-btn lab-btn-main"
                  onClick={simulateTraffic}
                  disabled={observabilityRunning}
                >
                  {observabilityRunning
                    ? "Traffic Meningkat..."
                    : "Simulasikan Traffic Spike"}
                </button>

                <button
                  type="button"
                  className="lab-btn"
                  onClick={resetObservability}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="lab-metrics">
              <div className="lab-metric">
                <span>CPU Usage</span>
                <strong>{metrics.cpu}%</strong>

                <div className="lab-meter">
                  <span style={{ width: `${metrics.cpu}%` }} />
                </div>
              </div>

              <div className="lab-metric">
                <span>Memory</span>
                <strong>{metrics.memory}%</strong>

                <div className="lab-meter">
                  <span style={{ width: `${metrics.memory}%` }} />
                </div>
              </div>

              <div className="lab-metric">
                <span>Request Rate</span>
                <strong>{metrics.requests}</strong>

                <small>req/s</small>
              </div>

              <div className="lab-metric">
                <span>Latency</span>
                <strong>{metrics.latency}</strong>

                <small>ms</small>
              </div>
            </div>

            <div className={`lab-alert ${alertActive ? "active" : ""}`}>
              <span className="lab-alert-dot" />

              <div>
                <strong>
                  {alertActive
                    ? "ALERT: High Resource Usage"
                    : "System Healthy"}
                </strong>

                <p>
                  {alertActive
                    ? "Prometheus mendeteksi CPU dan memory melewati threshold."
                    : "Semua metric berada dalam batas normal."}
                </p>
              </div>
            </div>

            <div className="lab-output">
              <div className="lab-output-head">
                <span className="terminal-dots">
                  <i />
                  <i />
                  <i />
                </span>

                <span>Monitoring Agent</span>
              </div>

              <div className="lab-terminal">
                <div className="log-command">$ prometheus query node_cpu_usage</div>
                <div className="log-success">
                  CPU: {metrics.cpu}%
                </div>
                <div className="log-command">$ prometheus query memory_usage</div>
                <div className="log-success">
                  Memory: {metrics.memory}%
                </div>
                <div className="log-command">$ prometheus query http_requests</div>
                <div className="log-success">
                  Requests: {metrics.requests} req/s
                </div>
                <div className="log-command">$ prometheus query http_latency</div>
                <div className="log-success">
                  Latency: {metrics.latency} ms
                </div>

                {alertActive && (
                  <div className="log-error">
                    ✗ ALERT High Resource Usage detected
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}