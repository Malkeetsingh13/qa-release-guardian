const { execSync } = require('child_process')

const commands = [
  {
    name: 'UI Smoke Tests',
    command: 'npm run test:smoke'
  },
  {
    name: 'API Tests',
    command: 'npm run test:api'
  },
  {
    name: 'Critical Regression Tests',
    command: 'npm run test:regression'
  }
]

console.log('\n========================================')
console.log('       QA RELEASE GUARDIAN')
console.log('          RELEASE GATE')
console.log('========================================\n')

let releaseReady = true

for (const suite of commands) {
  console.log(`\n▶ Running ${suite.name}...\n`)

  try {
    execSync(suite.command, {
      stdio: 'inherit',
      shell: true
    })

    console.log(`\n✅ ${suite.name} PASSED`)
  } catch (error) {
    console.log(`\n❌ ${suite.name} FAILED`)
    releaseReady = false
  }
}

console.log('\n========================================')

if (releaseReady) {
  console.log('       RELEASE STATUS: READY')
  console.log('========================================\n')
  process.exit(0)
}

console.log('       RELEASE STATUS: BLOCKED')
console.log('========================================\n')
process.exit(1)